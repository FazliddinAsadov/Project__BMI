import React from "react";
import { useCategoriesApi } from "@web/services/hooks/useCategoriesApi";
type Props = {};

const Categories = (props: Props) => {
  const { useCreateCategory, useDeleteCategory, useFetchAllCategories, useUpdateCategory } = useCategoriesApi();

  const { categories, isCategoriesLoading, categoriesError, refetchCategories } = useFetchAllCategories();
  console.log("categories", categories);
  if (isCategoriesLoading) return <h1>Loading ...</h1>;
  return <div>Categories page</div>;
};

export default Categories;
