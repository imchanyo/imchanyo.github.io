import React from 'react';
import '~/styles/badge.css';
import { CateogryInfoType } from '~/type/posts';

type BadgeType = {
    category: CateogryInfoType;
    index?: number;
};

export function Badge({ category, index }: BadgeType) {
    return (
        <div key={index || 0} className="group flex relative">
            <div className=" cursor-pointer shadow-md w-14 h-14 md:w-16 md:h-16 relative  border-2 bg-white border-white rounded-full overflow-hidden opacity-100 badgebox">
                <span>
                    <img
                        src={category.src}
                        decoding="async"
                        data-nimg="fill"
                        className="overflow-hidden"
                        sizes="100vw"
                        alt={category.value}
                    />
                </span>
            </div>

            <span
                className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto tool-tip"
            >
                {category.name}
            </span>
        </div>
    );
}
