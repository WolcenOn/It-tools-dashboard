export function flattenTools(db) {
  return db.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      category: category.category,
      categoryDescription: category.description,
    }))
  );
}

export function normalize(text) {
  return String(text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
