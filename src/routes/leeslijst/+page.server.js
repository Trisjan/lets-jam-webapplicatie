import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query uitleenGeschiedenis {
			uitleengeschiedenis1 {
				image {
					url
				}
				title
				author
				category
				inleverdatum
				detailLink
			}
		}
	`;

	return await hygraph.request(query);
}
