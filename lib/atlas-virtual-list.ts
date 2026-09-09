"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

export const ATLAS_LIST_GAP = 8;
export const ATLAS_LIST_OVERSCAN = 2;

export function estimateAtlasRowHeight(rowWidth: number) {
  return Math.round(rowWidth * (234 / 416)) + 128;
}

export function useAtlasVirtualList(count: number) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const heightsRef = useRef<number[]>([]);
  const [scrollTop, setScrollTop] = useState(0);
  const [viewport, setViewport] = useState(480);
  const [rowWidth, setRowWidth] = useState(416);
  const [, bump] = useState(0);

  const estimate = estimateAtlasRowHeight(rowWidth);

  const offsetOf = useCallback(
    (index: number) => {
      let y = 0;
      for (let i = 0; i < index; i += 1) {
        y += (heightsRef.current[i] ?? estimate) + ATLAS_LIST_GAP;
      }
      return y;
    },
    [estimate],
  );

  const totalHeight =
    count === 0
      ? 0
      : offsetOf(count - 1) + (heightsRef.current[count - 1] ?? estimate);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    const syncBox = () => {
      setViewport(el.clientHeight);
      setRowWidth(Math.max(200, el.clientWidth - 24));
    };
    const onScroll = () => setScrollTop(el.scrollTop);
    syncBox();
    setScrollTop(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(syncBox);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  let startIndex = 0;
  let walked = 0;
  while (startIndex < count) {
    const stride = (heightsRef.current[startIndex] ?? estimate) + ATLAS_LIST_GAP;
    if (walked + stride > scrollTop) {
      break;
    }
    walked += stride;
    startIndex += 1;
  }
  startIndex = Math.max(0, startIndex - ATLAS_LIST_OVERSCAN);

  let endIndex = startIndex;
  let y = offsetOf(startIndex);
  while (endIndex < count && y < scrollTop + viewport) {
    y += (heightsRef.current[endIndex] ?? estimate) + ATLAS_LIST_GAP;
    endIndex += 1;
  }
  endIndex = Math.min(count, endIndex + ATLAS_LIST_OVERSCAN);

  const measure = useCallback(
    (index: number, height: number) => {
      const next = Math.round(height);
      if (next <= 0 || heightsRef.current[index] === next) {
        return;
      }
      const prev = heightsRef.current[index] ?? estimate;
      heightsRef.current[index] = next;
      const el = scrollerRef.current;
      if (el && offsetOf(index) < el.scrollTop) {
        el.scrollTop += next - prev;
      }
      bump((n) => n + 1);
    },
    [estimate, offsetOf],
  );

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      if (!el || index < 0 || index >= count) {
        return;
      }
      const top = offsetOf(index);
      const height = heightsRef.current[index] ?? estimate;
      if (top < el.scrollTop) {
        el.scrollTop = top;
      } else if (top + height > el.scrollTop + el.clientHeight) {
        el.scrollTop = top + height - el.clientHeight;
      }
    },
    [count, estimate, offsetOf],
  );

  return {
    scrollerRef,
    startIndex,
    endIndex,
    totalHeight,
    offsetOf,
    measure,
    scrollToIndex,
  };
}
