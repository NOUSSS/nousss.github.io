import { RefObject } from "react";

type directionType = "vertical" | "horizontal";

interface NavMotionProps {
  container: RefObject<HTMLElement>;
  direction: directionType;
  size: number;
}

export default function NavMotion({
  container,
  direction,
  size,
}: NavMotionProps) {
  container.current!.style.position = "relative";

  const selector = document.createElement("div");

  selector.style.position = "absolute";
  selector.style.backgroundColor = "var(--mainColor)";
  selector.style.transition = "all 0.25s ease-in-out";
  selector.style.transform = "scaleX(0)";

  if (direction === "vertical") selector.style.width = `${size}px`;
  if (direction === "horizontal") selector.style.height = `${size}px`;

  container.current?.appendChild(selector);

  const items = container.current!.childNodes;
  const [containerItems] = Array.from(items);

  items.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const target = e.target as HTMLElement;

      if (direction === "vertical") {
        selector.style.height = `${target.offsetHeight}px`;
        selector.style.top = `${target.offsetTop}px`;

        selector.style.left = `${target.offsetLeft - 20}px`;
      }

      if (direction === "horizontal") {
        selector.style.width = `${target.offsetWidth}px`;
        selector.style.left = `${target.offsetLeft}px`;
      }
    });
  });

  containerItems.addEventListener("mouseover", () => {
    selector.style.transform = "scaleX(1)";
  });

  container.current?.addEventListener("mouseout", () => {
    selector.style.transform = "scaleX(0)";
  });
}
