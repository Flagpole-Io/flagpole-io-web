import { render, screen } from '@testing-library/react';
import {
  DefaultConfiguration,
  NoConfiguration,
} from '../../stories/Controls.stories';
import userEvent from '@testing-library/user-event';

const onClickLower = jest.fn();
const onClickHalf = jest.fn();
const onClickRaise = jest.fn();
const onClickLightsOn = jest.fn();
const onClickLightsOff = jest.fn();

const setupDefaultConfiguration = () =>
  render(
    <DefaultConfiguration
      {...DefaultConfiguration.args}
      onClickLower={onClickLower}
      onClickHalf={onClickHalf}
      onClickRaise={onClickRaise}
      onClickLightsOn={onClickLightsOn}
      onClickLightsOff={onClickLightsOff}
    />,
  );

const setupNoConfiguration = () =>
  render(
    <NoConfiguration
      {...NoConfiguration.args}
      onClickLower={onClickLower}
      onClickHalf={onClickHalf}
      onClickRaise={onClickRaise}
      onClickLightsOn={onClickLightsOn}
      onClickLightsOff={onClickLightsOff}
    />,
  );

describe('<Controls/>', () => {
  it('should call onClickRaise when raise is clicked', () => {
    setupDefaultConfiguration();

    userEvent.click(screen.getByText('Raise'));

    expect(onClickRaise).toHaveBeenCalled();
  });

  it('should call onClickHalf when half staff is clicked', () => {
    setupDefaultConfiguration();

    userEvent.click(screen.getByText('Half Staff'));

    expect(onClickHalf).toHaveBeenCalled();
  });

  it('should call onClickLowerWhen lower is clicked', () => {
    setupDefaultConfiguration();

    userEvent.click(screen.getByText('Lower'));

    expect(onClickLower).toHaveBeenCalled();
  });

  it('should call onClickLightsOn when lights on is clicked', () => {
    setupDefaultConfiguration();

    userEvent.click(screen.getByText('On'));

    expect(onClickLightsOn).toHaveBeenCalled();
  });

  it('should call onClickLightsOff when lights off is clicked', () => {
    setupDefaultConfiguration();

    userEvent.click(screen.getByText('Off'));

    expect(onClickLightsOff).toHaveBeenCalled();
  });

  it('should provide an alert when there are no controls present', () => {
    setupNoConfiguration();

    expect(
      screen.getByText(
        'Your current configuration does not allow for any manual controls.',
      ),
    ).toBeInTheDocument();
  });

  afterEach(jest.clearAllMocks);
});
