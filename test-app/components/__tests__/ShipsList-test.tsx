import { render, screen } from "@testing-library/react-native";
import { ShipsList } from "@/components/ShipsList";

const ships = [
  {
    id: "1",
    name: "Test Ship 1",
    image: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    name: "Test Ship 2",
    image: "https://example.com/image2.jpg",
  },
];

describe("ShipsList Component", () => {
  it("renders correctly with ships", () => {
    render(<ShipsList ships={ships} />);

    const title1 = screen.getByText("Test Ship 1");
    expect(title1).toBeTruthy();

    const title2 = screen.getByText("Test Ship 2");
    expect(title2).toBeTruthy();
  });
});
