import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  widthAndHeight: number;
}

const OffIcon = ({
  widthAndHeight,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={widthAndHeight}
    height={widthAndHeight}
    viewBox="0 0 1200 1200"
    xmlSpace="preserve"
    fill="#CDC3C7"
    stroke="#CDC3C7"
    {...props}
  >
    <path d="M513.94 0v693.97h172.12V0H513.94zM175.708 175.708C67.129 284.287 0 434.314 0 600c0 331.371 268.629 600 600 600s600-268.629 600-600c0-165.686-67.13-315.713-175.708-424.292l-120.85 120.85c77.66 77.658 125.684 184.952 125.684 303.442 0 236.981-192.146 429.126-429.126 429.126-236.981 0-429.126-192.145-429.126-429.126 0-118.49 48.025-225.784 125.684-303.442l-120.85-120.85z" />
  </svg>
);

export default OffIcon;
