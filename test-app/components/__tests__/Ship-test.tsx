import { fireEvent, render, screen } from "@testing-library/react-native";
import { Ship } from "@/components/Ship";

const shipId = "test-id";
const shipName = "Test Ship";
const shipImageUrl = "https://example.com/image.jpg";
const testImageId = "test-image-id";

describe("Ship Component", () => {
  it("renders correctly with name, id and image", () => {
    render(<Ship id={shipId} name={shipName} image={shipImageUrl} />);

    const title = screen.getByText(shipName);
    expect(title).toBeTruthy();

    // simulate the click on the Collapsible component
    // to open the image
    fireEvent.press(title);

    expect(screen.getByTestId(testImageId)).toBeTruthy();
    expect(screen.getByText(`ID: ${shipId}`)).toBeTruthy();
  });
});
