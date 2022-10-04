import axios from 'axios';

import { MapboxResponseType } from './types';

const mapboxBaseService = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
});

export async function mapboxService(
  lat: number,
  lng: number,
): Promise<MapboxResponseType | null> {
  const { data: result } = await mapboxBaseService.get<MapboxResponseType>(
    `${lng}, ${lat}.json?language=pt-BR&access_token=${
      import.meta.env.VITE_APP_MAPBOX_KEY
    }`,
  );

  return result || null;
}
