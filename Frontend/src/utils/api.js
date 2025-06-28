const NPM_SEARCH_API = 'https://registry.npmjs.org/-/v1/search';

export const searchNPMPackages = async (query) => {
  if (!query.trim()) return [];
  
  try {
    const response = await fetch(`${NPM_SEARCH_API}?text=${encodeURIComponent(query)}&size=20`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch packages');
    }
    
    const data = await response.json();
    
    return data.objects.map((item) => ({
      name: item.package.name,
      description: item.package.description || 'No description available',
      version: item.package.version,
      author: item.package.author,
      links: item.package.links
    }));
  } catch (error) {
    console.error('Error searching packages:', error);
    throw new Error('Failed to search packages. Please try again.');
  }
};