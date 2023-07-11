import React, { FC, memo } from 'react';

type Props = {
  container?: boolean
}

export const Grid: FC<Props> = memo((props) => {
  const {} = props;

  return (
    <div>

    </div>
  );
});

Grid.displayName = 'Grid';

// import React, { FC, ReactNode } from 'react';
//
// interface GridProps {
//   container?: boolean;
//   item?: boolean;
//   xs?: number;
//   sm?: number;
//   md?: number;
//   lg?: number;
//   xl?: number;
//   spacing?: number;
//   children: ReactNode;
// }
//
// const Grid: FC&lt;GridProps&gt; = ({
//   container = false,
//   item = false,
//   xs,
//   sm,
//   md,
//   lg,
//   xl,
//   spacing = 0,
//   children,
// }) =&gt; {
//   const classes = ['grid'];
//
//   if (container) {
//     classes.push('container');
//   }
//
