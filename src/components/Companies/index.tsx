import Company from "components/Company";
import { TCompany } from "typings";

type CompaniesProps = {
	data: TCompany[];
};

const Companies = ({ data }: CompaniesProps) => (
	<ul className="mt-8">
		{data.map((company) => (
			<Company key={company.id} {...company} />
		))}
	</ul>
);

export default Companies;
