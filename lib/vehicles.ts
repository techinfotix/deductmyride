/**
 * Vehicle dataset for programmatic model pages:
 *   /does-[make]-[model]-[year]-qualify/
 *
 * `assembly` is the verdict on FINAL ASSEMBLY location for US-market units:
 *  - "USA"     → final assembly in the United States
 *  - "Mixed"   → some US-market units are US-assembled, some are not
 *                (verdict page says: check your VIN)
 *  - "Non-USA" → final assembly outside the United States
 *
 * Keep notes short and factual. When in doubt we use "Mixed" rather than
 * guessing — the page then tells the visitor to run the VIN checker.
 */

export type Assembly = "USA" | "Mixed" | "Non-USA";

export interface Vehicle {
  make: string;
  model: string;
  assembly: Assembly;
  plantNote: string;
}

export const MODEL_YEARS = [2025, 2026];

export const vehicles: Vehicle[] = [
  // ---------- USA final assembly ----------
  { make: "Ford", model: "F-150", assembly: "USA", plantNote: "Assembled in Dearborn, Michigan and Kansas City, Missouri." },
  { make: "Ford", model: "Explorer", assembly: "USA", plantNote: "Assembled in Chicago, Illinois." },
  { make: "Ford", model: "Expedition", assembly: "USA", plantNote: "Assembled in Louisville, Kentucky." },
  { make: "Ford", model: "Bronco", assembly: "USA", plantNote: "Assembled in Wayne, Michigan." },
  { make: "Ford", model: "Mustang", assembly: "USA", plantNote: "Assembled in Flat Rock, Michigan." },
  { make: "Ford", model: "Ranger", assembly: "USA", plantNote: "Assembled in Wayne, Michigan." },
  { make: "Tesla", model: "Model Y", assembly: "USA", plantNote: "Assembled in Austin, Texas and Fremont, California." },
  { make: "Tesla", model: "Model 3", assembly: "USA", plantNote: "Assembled in Fremont, California." },
  { make: "Jeep", model: "Wrangler", assembly: "USA", plantNote: "Assembled in Toledo, Ohio." },
  { make: "Jeep", model: "Grand Cherokee", assembly: "USA", plantNote: "Assembled in Detroit, Michigan." },
  { make: "Jeep", model: "Gladiator", assembly: "USA", plantNote: "Assembled in Toledo, Ohio." },
  { make: "Toyota", model: "Camry", assembly: "USA", plantNote: "Assembled in Georgetown, Kentucky." },
  { make: "Toyota", model: "Highlander", assembly: "USA", plantNote: "Assembled in Princeton, Indiana." },
  { make: "Toyota", model: "Sienna", assembly: "USA", plantNote: "Assembled in Princeton, Indiana." },
  { make: "Toyota", model: "Tundra", assembly: "USA", plantNote: "Assembled in San Antonio, Texas." },
  { make: "Toyota", model: "Sequoia", assembly: "USA", plantNote: "Assembled in San Antonio, Texas." },
  { make: "Honda", model: "Accord", assembly: "USA", plantNote: "Assembled in Marysville, Ohio." },
  { make: "Honda", model: "Pilot", assembly: "USA", plantNote: "Assembled in Lincoln, Alabama." },
  { make: "Honda", model: "Odyssey", assembly: "USA", plantNote: "Assembled in Lincoln, Alabama." },
  { make: "Honda", model: "Ridgeline", assembly: "USA", plantNote: "Assembled in Lincoln, Alabama." },
  { make: "Chevrolet", model: "Traverse", assembly: "USA", plantNote: "Assembled in Lansing, Michigan." },
  { make: "Chevrolet", model: "Tahoe", assembly: "USA", plantNote: "Assembled in Arlington, Texas." },
  { make: "Chevrolet", model: "Suburban", assembly: "USA", plantNote: "Assembled in Arlington, Texas." },
  { make: "Chevrolet", model: "Corvette", assembly: "USA", plantNote: "Assembled in Bowling Green, Kentucky." },
  { make: "GMC", model: "Yukon", assembly: "USA", plantNote: "Assembled in Arlington, Texas." },
  { make: "GMC", model: "Acadia", assembly: "USA", plantNote: "Assembled in Lansing, Michigan." },
  { make: "Cadillac", model: "Escalade", assembly: "USA", plantNote: "Assembled in Arlington, Texas." },
  { make: "Buick", model: "Enclave", assembly: "USA", plantNote: "Assembled in Lansing, Michigan." },
  { make: "Lincoln", model: "Navigator", assembly: "USA", plantNote: "Assembled in Louisville, Kentucky." },
  { make: "Nissan", model: "Pathfinder", assembly: "USA", plantNote: "Assembled in Smyrna, Tennessee." },
  { make: "Nissan", model: "Frontier", assembly: "USA", plantNote: "Assembled in Canton, Mississippi." },
  { make: "Nissan", model: "Murano", assembly: "USA", plantNote: "Assembled in Smyrna, Tennessee." },
  { make: "Hyundai", model: "Santa Fe", assembly: "USA", plantNote: "Assembled in Montgomery, Alabama." },
  { make: "Hyundai", model: "Sonata", assembly: "USA", plantNote: "Assembled in Montgomery, Alabama." },
  { make: "Kia", model: "Telluride", assembly: "USA", plantNote: "Assembled in West Point, Georgia." },
  { make: "Kia", model: "Sorento", assembly: "USA", plantNote: "Assembled in West Point, Georgia." },
  { make: "Kia", model: "K5", assembly: "USA", plantNote: "Assembled in West Point, Georgia." },
  { make: "Subaru", model: "Outback", assembly: "USA", plantNote: "Assembled in Lafayette, Indiana." },
  { make: "Subaru", model: "Ascent", assembly: "USA", plantNote: "Assembled in Lafayette, Indiana." },
  { make: "BMW", model: "X3", assembly: "USA", plantNote: "Assembled in Spartanburg, South Carolina." },
  { make: "BMW", model: "X5", assembly: "USA", plantNote: "Assembled in Spartanburg, South Carolina." },
  { make: "Mercedes-Benz", model: "GLE", assembly: "USA", plantNote: "Assembled in Tuscaloosa, Alabama." },
  { make: "Volkswagen", model: "Atlas", assembly: "USA", plantNote: "Assembled in Chattanooga, Tennessee." },
  { make: "Volkswagen", model: "ID.4", assembly: "USA", plantNote: "Assembled in Chattanooga, Tennessee." },
  { make: "Rivian", model: "R1T", assembly: "USA", plantNote: "Assembled in Normal, Illinois." },
  { make: "Rivian", model: "R1S", assembly: "USA", plantNote: "Assembled in Normal, Illinois." },

  // ---------- Mixed: some US, some not — page says "check your VIN" ----------
  { make: "Chevrolet", model: "Silverado", assembly: "Mixed", plantNote: "Assembled in the USA and Mexico depending on configuration — check your VIN." },
  { make: "GMC", model: "Sierra", assembly: "Mixed", plantNote: "Assembled in the USA and Mexico depending on configuration — check your VIN." },
  { make: "Ram", model: "1500", assembly: "Mixed", plantNote: "Assembled in Sterling Heights, Michigan and Mexico — check your VIN." },
  { make: "Toyota", model: "RAV4", assembly: "Mixed", plantNote: "Assembled in the USA (Kentucky), Canada, and Japan — check your VIN." },
  { make: "Toyota", model: "Tacoma", assembly: "Mixed", plantNote: "Assembled in San Antonio, Texas and Mexico — check your VIN." },
  { make: "Toyota", model: "Corolla", assembly: "Mixed", plantNote: "Assembled in Huntsville, Alabama and Japan — check your VIN." },
  { make: "Honda", model: "CR-V", assembly: "Mixed", plantNote: "Assembled in the USA (Ohio, Indiana) and Canada — check your VIN." },
  { make: "Honda", model: "Civic", assembly: "Mixed", plantNote: "Assembled in the USA (Indiana) and Canada — check your VIN." },
  { make: "Nissan", model: "Rogue", assembly: "Mixed", plantNote: "Assembled in Smyrna, Tennessee and Japan — check your VIN." },
  { make: "Chevrolet", model: "Equinox", assembly: "Mixed", plantNote: "Assembled in the USA and Mexico — check your VIN." },
  { make: "Hyundai", model: "Tucson", assembly: "Mixed", plantNote: "Assembled in Montgomery, Alabama and South Korea — check your VIN." },
  { make: "Hyundai", model: "Elantra", assembly: "Mixed", plantNote: "Assembled in Montgomery, Alabama and South Korea — check your VIN." },

  // ---------- Non-USA final assembly ----------
  { make: "Toyota", model: "4Runner", assembly: "Non-USA", plantNote: "Assembled in Japan — not US final assembly." },
  { make: "Subaru", model: "Forester", assembly: "Non-USA", plantNote: "Assembled in Japan — not US final assembly." },
  { make: "Mazda", model: "CX-5", assembly: "Non-USA", plantNote: "Assembled in Japan — not US final assembly." },
  { make: "Lexus", model: "RX", assembly: "Non-USA", plantNote: "Assembled in Canada and Japan — not US final assembly." },
  { make: "Ford", model: "Maverick", assembly: "Non-USA", plantNote: "Assembled in Hermosillo, Mexico — not US final assembly." },
];

export function slugify(s: string): string {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Full pretty slug, e.g. "does-ford-f-150-2026-qualify". */
export function modelPageSlug(v: Vehicle, year: number): string {
  return `does-${slugify(v.make)}-${slugify(v.model)}-${year}-qualify`;
}

export function modelPagePath(v: Vehicle, year: number): string {
  return `/${modelPageSlug(v, year)}`;
}

export function findVehicle(make: string, model: string): Vehicle | undefined {
  return vehicles.find(
    (v) => slugify(v.make) === make && slugify(v.model) === model
  );
}

export function findVehicleBySlug(
  slug: string
): { vehicle: Vehicle; year: number } | undefined {
  for (const v of vehicles) {
    for (const year of MODEL_YEARS) {
      if (modelPageSlug(v, year) === slug) return { vehicle: v, year };
    }
  }
  return undefined;
}
