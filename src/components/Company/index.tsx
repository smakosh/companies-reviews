import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import {
	BadgeCheckIcon,
	BriefcaseIcon,
	CalendarIcon,
	StarIcon,
} from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import getTotalExperience from "utils/getTotalExperience";
import { TCompany } from "typings";

const Company = ({ id, properties, url }: TCompany) => {
	const totalExperience = getTotalExperience(
		new Date(properties["Starting Date"].date.start),
		new Date(properties["End Date"].date.start)
	);

	// @TODO: turn each property into a component
	return (
		<li className="mb-9">
			<Link href={`/company/${id}`}>
				<a className="inline-flex items-center mb-4">
					<Image
						src={properties.Logo.files[0].file.url}
						alt={properties.Title.title[0].text.content}
						width={64}
						height={64}
						layout="fixed"
						objectFit="contain"
					/>
					<h2 className="text-black font-bold text-xl ml-2">
						{properties.Title.title[0].text.content}
					</h2>
				</a>
			</Link>
			<div className="flex items-center mb-3">
				<CalendarIcon className="w-6 h-6 mr-2" />
				<i>{properties["Starting Date"].date.start}</i>
				<div className="w-3 h-0.5 bg-slate-500 mx-2" />
				<i>{properties["End Date"].date.start}</i>
				{totalExperience !== 0 && (
					<span className="ml-2">/ {totalExperience}</span>
				)}
			</div>
			<div className="flex items-center mb-3">
				<BriefcaseIcon className="w-6 h-6 mr-2" />
				<p>{properties.Position.select.name}</p>
			</div>
			<div className="flex items-center mb-3">
				<BadgeCheckIcon
					className={cx("w-6 h-6 mr-2", {
						"text-green-500":
							properties["Would you recommend?"].checkbox.valueOf(),
					})}
				/>
				<p>
					Would you recommend?{" "}
					{properties["Would you recommend?"].checkbox.valueOf() ? "Yes" : "No"}
				</p>
			</div>
			<div className="flex items-center mb-5">
				{Array.from(Array(5).keys()).map((i) =>
					i < properties.Review.number ? (
						<StarIconSolid
							key={`star-${i}`}
							className="w-6 h-6 mr-2 last:mr-0 text-yellow-500"
						/>
					) : (
						<StarIcon key={`star-${i}`} className="w-6 h-6 mr-2 last:mr-0" />
					)
				)}
			</div>
			<div className="flex items-center">
				<Link href={`/company/${id}`}>
					<a className="bg-violet-600 text-white px-4 py-2 text-center rounded-md mr-2">
						View details
					</a>
				</Link>
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					className="text-slate-500 italic underline"
				>
					Edit on Notion
				</a>
			</div>
		</li>
	);
};

export default Company;
