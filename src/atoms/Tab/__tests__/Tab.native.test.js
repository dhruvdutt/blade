import React from 'react';
import { renderWithTheme } from '../../../_helpers/testing';
import { fireEvent, act } from '@testing-library/react-native';
import Tab from '../Tab';

describe('<Tab />', () => {
  describe('unselected tab', () => {
    test('should render tab when is not active', () => {
      const { container, getAllByText } = renderWithTheme(
        <Tab label="Active state" isActive={false} />,
      );
      expect(container).toMatchSnapshot();
      const label = getAllByText('Active state');
      expect(label).toBeTruthy();
    });

    test('should match snapshot when valid icon name is passed', () => {
      const { container } = renderWithTheme(
        <Tab label="Active state" icon="info" isActive={false} />,
      );
      expect(container).toMatchSnapshot();
    });

    test('should match snapshot when disabled, with icon present', () => {
      const { container } = renderWithTheme(
        <Tab label="Active state" icon="info" disabled={true} isActive={false} />,
      );
      expect(container).toMatchSnapshot();
    });

    test('should call onPress method when press event is fired on tab', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={false}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab');
      act(() => {
        fireEvent.press(component);
      });
      expect(onPressMockCallback).toHaveBeenCalled();
    });

    test('should match snapshot for user taps on tab button', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={false}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab-press-in"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab-press-in');
      act(() => {
        fireEvent.pressIn(component);
      });
      expect(container).toMatchSnapshot();
    });

    test('should match snapshot for user taps on tab button', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={false}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab-press-in"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab-press-in');
      act(() => {
        fireEvent.pressIn(component);
        expect(container).toMatchSnapshot();
        fireEvent.pressOut(component);
      });
      expect(container).toMatchSnapshot();
    });
  });

  describe('selected selected tab', () => {
    test('should render tab when active', () => {
      const { container, getAllByText } = renderWithTheme(
        <Tab label="Active state" isActive={true} />,
      );
      expect(container).toMatchSnapshot();
      const label = getAllByText('Active state');
      expect(label).toBeTruthy();
    });

    test('should match snapshot when valid icon name is passed', () => {
      const { container } = renderWithTheme(
        <Tab label="Active state" icon="info" isActive={true} />,
      );
      expect(container).toMatchSnapshot();
    });

    test('should match snapshot when disabled, with icon present', () => {
      const { container } = renderWithTheme(
        <Tab label="Active state" icon="info" disabled={true} isActive={true} />,
      );
      expect(container).toMatchSnapshot();
    });

    test('should call onPress method when press event is fired on tab', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={true}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab');
      act(() => {
        fireEvent.press(component);
      });
      expect(onPressMockCallback).toHaveBeenCalled();
    });

    test('should match snapshot for user taps on tab button', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={true}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab-press-in"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab-press-in');
      act(() => {
        fireEvent.pressIn(component);
      });
      expect(container).toMatchSnapshot();
    });

    test('should match snapshot for user taps on tab button', () => {
      const onPressMockCallback = jest.fn();
      const { container, getByTestId } = renderWithTheme(
        <Tab
          isActive={true}
          label="Active state"
          icon="info"
          onPress={onPressMockCallback}
          testID="test-active-tab-press-in"
        />,
      );
      expect(container).toMatchSnapshot();
      const component = getByTestId('test-active-tab-press-in');
      act(() => {
        fireEvent.pressIn(component);
        expect(container).toMatchSnapshot();
        fireEvent.pressOut(component);
      });
      expect(container).toMatchSnapshot();
    });
  });
});
