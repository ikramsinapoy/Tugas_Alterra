import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("ikramsinapoy", () => {
    const { result } = renderHook(() => useInputValue("Test string"));

    expect(result.current.value).toEqual("Test string");
  });
});
