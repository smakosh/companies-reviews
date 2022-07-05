import { differenceInMonths, differenceInYears } from "date-fns";

const getTotalExperience = (from: Date, to: Date) => {
	const diff = differenceInYears(to, from);

	if (diff < 1) {
		const diffInMonths = differenceInMonths(to, from);

		if (diffInMonths < 1) {
			return 0;
		}

		return `${Math.floor(diffInMonths)} ${
			Math.floor(diffInMonths) === 1 ? "month" : "months"
		}`;
	}

	return `${Math.floor(diff)} ${Math.floor(diff) === 1 ? "year" : "years"}`;
};

export default getTotalExperience;
