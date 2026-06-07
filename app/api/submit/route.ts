import { NextResponse } from "next/server";
import { firestore } from "@/lib/firebase-admin";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title")?.toString();
    const authors = formData.get("authors")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const affiliation = formData.get("affiliation")?.toString();
    const keywords = formData.get("keywords")?.toString();
    const abstract = formData.get("abstract")?.toString();

    if (
      !title ||
      !authors ||
      !email ||
      !phone ||
      !affiliation ||
      !abstract
    ) {
      return NextResponse.json({
        success: false,
        message: "Required fields missing",
      });
    }

    const submissionRef = firestore.collection("submissions").doc();

    const paperId = `JFER-${Date.now()}`;

    await submissionRef.set({
      paperId,
      title,
      authors,
      email,
      phone,
      affiliation,
      abstract,
      keywords: keywords || "",
      pdfUrl: "",
      status: "pending",
      submittedAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      paperId,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}