import { describe, it, expect, beforeEach } from "vitest";
import { getUsername } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    const mockUser = { name: "vacaymode", email: "vacaymode@stud.noroff.no" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    const result = getUsername();
    expect(result).toBe("vacaymode");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
