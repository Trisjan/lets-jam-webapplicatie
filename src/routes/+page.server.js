import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	// De openbare sleutel voor de OBA API
	const publicKey = 'dc0e2f073c03758140452044906bc818';
	// Opmerking: De zoekterm is momenteel uitgeschakeld (uitgecommentarieerd).
	// const searchTerm = 'kikker';

	// GraphQL-query voor het ophalen van uitleengeschiedenis
    const query = gql`
    query MyQuery {
        homepages {
            homepageText
        }
        families {
            name
        }
        activiteitens {
            activiteitImage {
              url
            }
            activiteitLink
            activiteitNaam
            activiteitBeschrijving
          }
    }
`;
    

	// Hygraph-request voor het ophalen van data met behulp van GraphQL-query
	const hygraphData = await hygraph.request(query);
console.log(hygraphData.activiteitens[0]);
    // URL-parameters voor het maken van zoekopdrachten naar boeken, e-books en luisterboeken
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
    const defaultUrlSearch = urlBase + urlSearch + urlQuery +"kikker"+ urlKey + urlOutput;

    // Fetch-requests voor het ophalen van boeken, e-books en luisterboeken 

        const responseBooks = await fetch(
        defaultUrlBooks
    );

    const responseEBooks = await fetch(
        defaultUrleBooks
    );

    const responseAudioBooks = await fetch(
        defaultUrlAudioBooks
    );

    const search = await fetch(
        defaultUrlSearch
    );

    // Het omzetten van de JSON-respons naar bruikbare objecten
    const apiBooks = await responseBooks.json();
    const apiAudioBooks = await responseAudioBooks.json();
    const apiEBooks = await responseEBooks.json();
    const apiSearch = await search.json();


        // Het retourneren van de verzamelde gegevens

    return {
     
        hygraphData,
        apiBooks,
        apiAudioBooks,
        apiEBooks,
        apiSearch,
          // andere gegevens die je wilt doorgeven aan de component
      
      }
}


