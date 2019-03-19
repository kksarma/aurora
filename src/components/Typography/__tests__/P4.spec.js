import Typography from "../";
import MOCK_STRING from "../__mocks__/string.mocks";

describe("Typography.P4", () => {
  it("should render default markup when no props are passed", () => {
    global.snapshotWithTheme(Typography.P4, { children: MOCK_STRING });
  });

  it("should render with a textTransform prop", () => {
    global.snapshotWithTheme(Typography.P4, {
      children: MOCK_STRING,
      textTransform: "uppercase"
    });
  });

  it("should render with a custom weight prop", () => {
    global.snapshotWithTheme(Typography.P4, {
      children: MOCK_STRING,
      weight: "semiBold"
    });
  });

  it("should render with custom color and variant props", () => {
    global.snapshotWithTheme(Typography.P4, {
      children: MOCK_STRING,
      color: "accent01",
      variant: "dark"
    });
  });

  it("should render with a custom color prop that lacks variants", () => {
    global.snapshotWithTheme(Typography.P4, {
      children: MOCK_STRING,
      color: "brand"
    });
  });

  it("should render without children", () => {
    global.snapshotWithTheme(Typography.P4);
  });
});