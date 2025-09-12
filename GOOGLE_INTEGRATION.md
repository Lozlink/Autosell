# Google Integration Setup

This document explains how to set up Google Reviews and Google Maps integration for the AutoSell.ai website.

## Required API Keys

### 1. Google Maps API Key
- **Purpose**: Powers the interactive map component
- **Environment Variable**: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- **Setup**: 
  1. Go to [Google Cloud Console](https://console.cloud.google.com/)
  2. Create a new project or select existing
  3. Enable the "Maps JavaScript API"
  4. Create credentials (API Key)
  5. Restrict the key to your domain for security

### 2. Google Places API Key
- **Purpose**: Fetches Google Reviews for your business
- **Environment Variable**: `GOOGLE_PLACES_API_KEY`
- **Setup**:
  1. In the same Google Cloud project
  2. Enable the "Places API"
  3. Create a new API key or use existing
  4. Restrict to server-side usage only

### 3. Google Place ID
- **Purpose**: Identifies your specific business location
- **Environment Variable**: `GOOGLE_PLACE_ID`
- **Setup**:
  1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
  2. Search for your business
  3. Copy the Place ID

## Environment Variables

Add these to your `.env.local` file:

```env
# Google Maps API Key (for Maps integration)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Google Places API Key (for Reviews integration)
GOOGLE_PLACES_API_KEY=your_google_places_api_key_here

# Google Place ID (your business's Google Place ID)
GOOGLE_PLACE_ID=your_google_place_id_here
```

## Features Implemented

### Google Maps Integration
- Interactive map showing Australia with major cities marked
- Custom markers for service areas
- Fallback to static map if API fails
- Responsive design with custom styling

### Google Reviews Integration
- Fetches real reviews from Google Places API
- Displays profile photos and verification status
- Combines with mock reviews for better coverage
- Handles API errors gracefully

## API Routes

### `/api/google-reviews`
- **Method**: GET
- **Purpose**: Fetches Google Reviews from Places API
- **Returns**: JSON with reviews array or error message
- **Security**: Server-side only (API key not exposed to client)

## Fallback Behavior

Both components include fallback behavior:
- **Maps**: Shows static Australia outline if Google Maps fails to load
- **Reviews**: Uses mock reviews if Google API is unavailable

## Security Considerations

1. **API Key Restrictions**: Restrict Google API keys to specific domains/IPs
2. **Server-Side Only**: Google Places API key should only be used server-side
3. **Rate Limiting**: Consider implementing rate limiting for API calls
4. **Error Handling**: All API calls include proper error handling

## Testing

1. Test with valid API keys to ensure full functionality
2. Test with invalid/missing keys to verify fallback behavior
3. Test on different screen sizes for responsive design
4. Verify that reviews display correctly with profile photos

## Troubleshooting

### Maps Not Loading
- Check `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is set correctly
- Verify Maps JavaScript API is enabled
- Check browser console for errors

### Reviews Not Loading
- Check `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set
- Verify Places API is enabled
- Check server logs for API errors

### CORS Issues
- Ensure API keys are properly restricted to your domain
- Check that the Places API key is server-side only
