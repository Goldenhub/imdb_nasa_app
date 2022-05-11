
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe('Card Component', () => {
    it("rendered Card Component", () => {
        render(<Card />);
        // const card = screen.getByTestId("card");
        // expect(card).toBeInTheDocument();
    })
})