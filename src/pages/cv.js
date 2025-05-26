import CV from "../src/components/CV"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <CV />

      {/* Print Instructions */}
      <div className="max-w-4xl mx-auto mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg print:hidden">
        <h3 className="font-semibold text-blue-800 mb-2">How to save as PDF:</h3>
        <ol className="list-decimal list-inside text-sm text-blue-700 space-y-1">
          <li>
            Press <kbd className="bg-blue-200 px-1 rounded">Ctrl+P</kbd> (or{" "}
            <kbd className="bg-blue-200 px-1 rounded">Cmd+P</kbd> on Mac)
          </li>
          <li>Select "Save as PDF" as the destination</li>
          <li>Choose "More settings" and set margins to "Minimum"</li>
          <li>Make sure "Background graphics" is checked</li>
          <li>Click "Save"</li>
        </ol>
      </div>
    </div>
  )
}
