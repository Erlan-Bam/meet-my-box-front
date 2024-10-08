import type { PackageProps } from "@entities/Packages";
import { axiosInstance } from "../useInterceptor";

export type Item = {
  name: string;
  country: string;
  quantity: number;
  weight: number;
  cost: number;
};

interface IData {
  items: Item[];
  status: "Pending";
}

export async function useAddPackage(data: IData): Promise<PackageProps[]> {
  try {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");

    const response = await axiosInstance.post("/api/packages/add", data, {
      headers: {
        Authorization: `Bearer ${userData.access}`,
      },
    });

    console.log("Packages got successfully:", response.data);

    return response.data.items;
  } catch (error: unknown | any) {
    console.error("Failed to get packages:", error);
    if (error.response) {
      return [];
    } else {
      return [];
    }
  }
}
