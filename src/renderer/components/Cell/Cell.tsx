import React from 'react';

function Cell(props: {
  children: React.ReactNode;
  c?: string;
  r?: string;
  h?: string;
  w?: string;
  style?: React.CSSProperties;
}) {
  const { children, c, r, h, w, style } = props;
  return (
    <div
      style={{
        gridColumn: c,
        gridRow: r,
        height: h,
        width: w,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

Cell.defaultProps = {
  c: undefined,
  r: undefined,
  h: '100%',
  w: '100%',
  style: undefined,
};

export default Cell;
