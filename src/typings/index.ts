export type TCompany = {
	id: string;
	properties: {
		"Would you recommend?": {
			type: "checkbox";
			checkbox: boolean;
		};
		"Starting Date": {
			type: "date";
			date: {
				start: string;
			};
		};
		"End Date": {
			type: "date";
			date: {
				start: string;
			};
		};
		Review: {
			type: "number";
			number: number;
		};
		Position: {
			type: "select";
			select: {
				name: "Software engineer";
			};
		};
		Title: {
			type: "title";
			title: [
				{
					type: "text";
					text: {
						content: string;
						link: null;
					};
				}
			];
		};
		Logo: {
			// @TODO: handle remote images urls
			files: {
				file: {
					url: string;
				};
			}[];
		};
	};
	url: string;
};
