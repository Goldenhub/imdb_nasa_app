
import { render } from "@testing-library/react";
import {Home} from "./Home";

describe('Home', () => {
    test("renders Home Component", () => {
        render(<Home />);
    })
})