type ContextType = {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
};

type GeometryType = {
  coordinates: [number, number];
};

type PropertyType = {
  accuary?: string;
};

type FeatureType = {
  id: string;
  bbbox?: number[];
  center: [number, number];
  context: ContextType[];
  geometry: GeometryType;
  place_name: string;
  'place_name_pt-BR': string;
  place_type: string[];
  properties: PropertyType;
  relevance: number;
  text: string;
  type: string;
};

export interface MapboxResponseType {
  attribution: string;
  features: FeatureType[];
  query: [number, number];
  type: string;
}
