import React from 'react';

function Grid(props: {
  children: React.ReactNode;
  gc?: string;
  gr?: string;
  style?: React.CSSProperties;
}) {
  const { children, gc, gr, style } = props;
  const defaultStyle: React.CSSProperties = {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: gc,
    gridTemplateRows: gr,
  };
  return (
    <div className="box" style={{ ...defaultStyle, ...style }}>
      {children}
    </div>
  );
}

Grid.defaultProps = {
  gc: undefined,
  gr: undefined,
  style: undefined,
};

export default Grid;
