import type { PackageProps } from "@entities/Packages";
import { axiosInstance } from "../useInterceptor";

interface IData {
  id: number;
  insurance: string;
  courier: string;
  note: string;
}

export async function useUpdatePackage(
  data: IData
): Promise<PackageProps | null> {
  try {
    const response = await axiosInstance.patch(
      `/api/packages/update/${data.id}`,
      data
    );

    console.log("Packages got successfully:", response.data);

    return response.data.items;
  } catch (error: unknown | any) {
    console.error("Failed to get packages:", error);
    if (error.response) {
      return null;
    } else {
      return null;
    }
  }
}