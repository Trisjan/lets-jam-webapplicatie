import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	const publicKey = 'dc0e2f073c03758140452044906bc818';
	// const searchTerm = 'kikker';

	const query = gql`
		query uitleengeschiedenis {
			uitleengeschiedenis1 {
				author
				image {
					url
				}
				title
			}
		}
	`;

	const hygraphData = await hygraph.request(query);

  
  const space = "%20";
  const bookItems = "boeken";
  const EbookItems = "e-books";
  const audioItems = "luisterboeken";
  const urlSearch = "search/";
  const urlBase = "https://zoeken.oba.nl/api/v1/";
  const urlQuery = "?q=";
  const urlDefault = "special:all";
  const urlKey = `&authorization=${publicKey}`;
  const urlOutput = "&refine=true&output=json";
  const defaultUrlBooks = urlBase + urlSearch + urlQuery + urlDefault + space + bookItems + urlKey + urlOutput;
  const defaultUrleBooks = urlBase + urlSearch + urlQuery + urlDefault + space + EbookItems + urlKey + urlOutput;
  const defaultUrlAudioBooks = urlBase + urlSearch + urlQuery + urlDefault + space + audioItems + urlKey + urlOutput;
  
	const response = await fetch(
		defaultUrlBooks && defaultUrleBooks && defaultUrlAudioBooks
	);
	const searchData = await response.json();

	return {
		hygraphData,
		searchData
	};
}
