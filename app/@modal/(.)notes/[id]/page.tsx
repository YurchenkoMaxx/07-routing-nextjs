import NotePreviewModal from "@/components/NotePreview/NotePreviewModal";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function NotePreviewPage({ params }: PageProps) {
  const { id } = await params;
  return <NotePreviewModal noteId={id} />;
}
