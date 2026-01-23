interface LoaderProps {
  loading: boolean;
  text?: string;
}

export const Loader = ({ loading, text = "Cargando..." }: LoaderProps) => {
  if (!loading) return null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-400 border-t-transparent" />
        <span className="text-green-700 text-sm">{text}</span>
      </div>
    </div>
  );
};
