import {LinearGradient, LinearGradientPoint} from 'expo-linear-gradient';
import {styles} from './GradientBackground.styles';
import Svg, {
  Stop,
  Defs,
  Rect,
  RadialGradient,
  SvgCss,
  NumberProp,
} from 'react-native-svg';
import {ReactChild, ReactChildren} from 'react';
import {ColorValue, RecursiveArray} from 'react-native';

const defaultProps = {
  type: 1,
};

export default function GradientBackground(props: {
  children: ReactChild | ReactChildren | any[] | undefined;
  type?: 1 | 2;
  radialProps?: {
    centerX?: NumberProp;
    centerY?: NumberProp;
    radiusX?: NumberProp;
    radiusY?: NumberProp;
    focusX?: NumberProp;
    focusY?: NumberProp;
    stopOpacity1?: NumberProp;
    stopOpacity2?: NumberProp;
  };
  linearProps?: {
    colors?: string[];
    start?: LinearGradientPoint;
    end?: LinearGradientPoint;
  };
}) {
  const fProps = {...defaultProps, ...props};

  const renderLinear = () => {
    return (
      <LinearGradient
        colors={props.linearProps?.colors ?? ['#FA7745', '#F3C442', '#FFFFFF']}
        start={props.linearProps?.start ?? {x: 0.1, y: 0.04}}
        end={props.linearProps?.end ?? {x: 0.1, y: 0.2}}
        style={styles.gradientBg}>
        {fProps.children}
      </LinearGradient>
    );
  };

  const renderRadialSVG = () => {
    return (
      <Svg height="100%" width="100%" {...props}>
        <Defs>
          <RadialGradient
            id="radialG"
            cx={props.radialProps?.centerX ?? '10%'}
            cy={props.radialProps?.centerY ?? '10%'}
            rx={props.radialProps?.radiusX ?? '10%'}
            ry={props.radialProps?.radiusY ?? '10%'}
            fx={props.radialProps?.focusX ?? '10%'}
            fy={props.radialProps?.focusY ?? '10%'}
            gradientUnits="userSpaceOnUse">
            <Stop
              offset="0"
              stopColor="#8F77FF"
              stopOpacity={props.radialProps?.stopOpacity1 ?? '30'}
            />
            <Stop
              offset="1"
              stopColor="#5F42FBFF"
              stopOpacity={props.radialProps?.stopOpacity2 ?? '1'}
            />
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" strokeWidth="1" fill="url(#radialG)" />
        {props.children}
      </Svg>
    );
  };

  return fProps.type === 1 ? renderLinear() : renderRadialSVG();
}
