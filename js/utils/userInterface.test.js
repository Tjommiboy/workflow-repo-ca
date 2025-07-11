import { describe, it, expect } from "vitest";
import { isActivePath } from "./userInterface";

describe("isActivePath", () => {
  it("return true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });
  it('returns true for root path ("/") when currentPath is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });
  it('returns true for root path ("/") when currentPath is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/blog", "/blog/post/123")).toBe(true);
  });

  it("returns false when paths don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
