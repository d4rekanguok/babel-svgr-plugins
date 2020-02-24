import * as React from "react";

const IconSvgrPlugin = props => {
  const strokeColor = props.strokeColor || "#3D0969";
  const fillColor = props.fillColor || "#FF6AB0";
  const strokeWidth = props.strokeWidth || 6;
  const active = props.active || false;
  return (
    <svg width="1em" height="1em" viewBox="0 0 120 120">
      <g fill="none" fillRule="evenodd">
        {props.active ? (
          <circle fill={fillColor} fillRule="nonzero" cx={63} cy={65} r={42} />
        ) : null}
        <path
          d="M32 58v4M81 58v4"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          cx={57}
          cy={59}
          r={42}
        />
        <path
          d="M34 75.004C39.06 82.256 47.487 87 57 87c9.52 0 17.941-4.74 23-12M53 56v16h6"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IconSvgrPlugin;
