import React from "react";
import { render } from "@testing-library/react-native";
import Summary from "../components/Summary";

describe("Summary component", () => {
  beforeAll(() => {
    // mock Math.random so the practitioner choice is predictable
    jest.spyOn(Math, "random").mockReturnValue(0); // always pick first practitioner
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("renders practitioner, site, slot and motive", () => {
    const mockSite = {
      id: 1,
      name: "Test Clinic",
      city: "Test City",
      practitioners: [{ name: "Dr. Mock" }, { name: "Nurse Example" }],
    };

    const mockSlot = "2025-01-01 10:00 AM";
    const mockMotive = { id: 3, name: "General Consultation" };

    const { getByText } = render(
      <Summary site={mockSite} slot={mockSlot} motive={mockMotive} />
    );

    // ✅ Because Math.random() is mocked, practitioner = "Dr. Mock"
    expect(getByText("Practitioner:")).toBeTruthy();
    expect(getByText("Dr. Mock")).toBeTruthy();

    expect(getByText("Site:")).toBeTruthy();
    expect(getByText("Test City")).toBeTruthy();
    expect(getByText("Test Clinic")).toBeTruthy();

    expect(getByText("Date and time:")).toBeTruthy();
    expect(getByText("2025-01-01 10:00 AM")).toBeTruthy();

    expect(getByText("Motive:")).toBeTruthy();
    expect(getByText("General Consultation")).toBeTruthy();
  });
});
