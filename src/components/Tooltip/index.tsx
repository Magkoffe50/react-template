import React, { FC, createElement, ReactElement } from 'react';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';
import styles from './styles.module.scss';

type Event = 'click' | '';
type Place = 'top' | 'right' | 'bottom' | 'left';
type Offset = { top?: number, right?: number, bottom?: number, left?: number };

type Props = {
  name?: string | number,
  target: ReactElement | string,
  content: ReactElement | string,
  event?: Event | string,
  globalEventOff?: Event | string,
  tag?: 'button' | 'div',
  eventOff?: Event | string,
  place?: Place,
  effect?: 'solid' | 'float',
  clickable?: boolean,
  offset?: Offset,
  withoutArrows?: boolean,
  scrollHide?: boolean,
  className?: string,
  classNameTarget?: string,
  isCustomStyles?: boolean,

  onShow?: () => void,
  onHide?: () => void,
  onTargetClick?: (e: HTMLButtonElement) => void,
};

const Tooltip: FC<Props> = ({
  name = 'myTooltip',
  target,
  content,
  event = 'click',
  eventOff = 'mouseleave',
  globalEventOff = '',
  tag = 'button',
  place = 'top',
  effect = 'solid',
  clickable = false,
  offset = {},
  className,
  classNameTarget = styles.targetBtn,
  withoutArrows = false,
  scrollHide = true,
  isCustomStyles = false,

  onShow = () => {},
  onHide = () => {},
}) => {
  const targetElement = createElement(tag, {
    'data-tip': '',
    'data-for': name,
    'data-event': event,
    className: classNameTarget,
    onClick: (e) => e.preventDefault(),
  }, target);

  return (
    <div>
      {targetElement}
      <ReactTooltip
        id={String(name)}
        place={place}
        effect={effect}
        clickable={clickable}
        isCapture
        className={cx(
          styles.tooltip,
          { [styles.withoutArrows]: withoutArrows },
          className,
        )}
        eventOff={eventOff}
        globalEventOff={globalEventOff}
        offset={offset}
        backgroundColor="white"
        textColor="black"
        delayHide={clickable ? 150 : 0}
        scrollHide={scrollHide}
        afterShow={onShow}
        afterHide={onHide}
      >
        <div
          className={cx({
            [styles.tooltipContent]: !isCustomStyles,
          })}
        >
          {content}
        </div>
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
