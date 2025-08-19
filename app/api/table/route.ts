import { NextResponse } from "next/server";

import data from "./data.json";

export const GET = () => {
  return NextResponse.json(data);
};
