import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from the props should be in the state", () => {
      const component = create(<ProfileStatus status="status" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("status");
    });

    test("after creation span should be displayed", () => {
      const component = create(<ProfileStatus status="status" />);
      const root = component.root;
      let span = root.findByType('span');
      expect(span).not.toBeNull();
    });

    test("after creation span should be displayed with correct text", () => {
      const component = create(<ProfileStatus status="status" />);
      const root = component.root;
      expect(() => {
        let input = root.findByType('input');
      }).toThrow();
    });

    test("after creation input shouldn't be displayed", () => {
      const component = create(<ProfileStatus status="status" />);
      const root = component.root;
      let span = root.findByType('span');
      expect(span).not.toBeNull();
    });

    test("input shuld be displayed in edit mode instead of span", () => {
      const component = create(<ProfileStatus status="status" />);
      const root = component.root;
      let span = root.findByType('span');
      span.props.onDoubleClick();
      let input = root.findByType('input');
      expect(input.props.value).toBe('status');
    });

    test("callback should be called", () => {
      const mockCallBack = jest.fn();
      const component = create(<ProfileStatus status="status" updateStatus={mockCallBack} />);
      const instance = component.getInstance();
      instance.deactivateMode();
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });