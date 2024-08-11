import React, { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

interface Props {
    min: number;
    max: number;
    onChange: ({ min, max }: { min: number, max: number }) => void;
    width?: string;
    title?: string;
}

const CustomRangeDouble: React.FC<Props> = ({ min, max, onChange, width = "300px", title = "" }) => {
    const [minVal, setMinVal] = useState<number>(min);
    const [maxVal, setMaxVal] = useState<number>(max);
    const range = useRef<HTMLDivElement>(null);

    const getPercent = (value: number) => Math.round(((value - min) / (max - min)) * 100);

    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, min, max]);
    let timer: any;
    useEffect(() => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            onChange({ min: minVal, max: maxVal });
        },1000)
    }, [minVal, maxVal]);

    return (
        <div>
            {title && <p className="md:text-lg font-[500] mb-2 md:mb-4">{title}</p>}
            <input
                type="range"
                min={min}
                max={max}
                value={minVal}
                onChange={(event) => {
                    setMinVal(Math.min(Number(event.target.value), maxVal - 1));
                }}
                className="thumb z-[3] pointer-events-none absolute h-0 outline-none max-w-[325px]"
                style={{ zIndex: minVal > max - 100 ? 5 : undefined, width: width }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxVal}
                onChange={(event) => {
                    setMaxVal(Math.max(Number(event.target.value), minVal + 1));
                }}
                className="thumb z-[4] pointer-events-none absolute h-0 outline-none max-w-[325px]"
                style={{ width: width }}
            />
            <div className="relative max-w-[325px]" style={{ width: width }}>
                <div className="absolute rounded-[3px] h-[5px] bg-[#ced4da] w-full z-[1]" />
                <div ref={range} className="absolute rounded-[3px] h-[5px] bg-primary-100 z-[2]" />
                <div className="text-primary text-sm md:text-base text-center rounded-sm py-2 pt-4 px-4 max-w-fit mx-auto">
                    {minVal}  to  {maxVal} $
                </div>
            </div>
        </div>
    );
};

CustomRangeDouble.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string,
    title: PropTypes.string,
};

export default CustomRangeDouble;
