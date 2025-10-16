import { Award, ChevronRight, Settings } from "lucide-react";
import { useCallback } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useSchoolModal } from "../contexts/SchoolContext";
import { useToast } from "../contexts/ToastContext";
import { type SchoolData, translateRole } from "../types/SchoolData";
import Button from "./Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type SchoolProps = {
  school: SchoolData;
  multiple: boolean;
};

/** The School component with redirect to local dashboard */
const School = ({ school, multiple }: SchoolProps) => {
  const schoolModal = useSchoolModal();
  const auth = useAuth();
  const toast = useToast();

  const copyCertificateCode = useCallback(() => {
    navigator.clipboard
      .writeText(
        `<a href="https://classinsights.at?sid=${school.SchoolId}" target="_blank" rel="noopener noreferrer"><img src="https://classinsights.at/certificate.svg" alt="ClassInsights Zertifikat von ${school.Name} auf classinsights.at anzeigen" width="75" height="75"></a>`,
      )
      .then(() => toast.showMessage("Zertifikat HTML Code kopiert"))
      .catch(() => toast.showMessage("Kopieren fehlgeschlagen!", "error"));
  }, [toast.showMessage, school.SchoolId, school.Name]);

  const editSchool = useCallback(() => schoolModal.show(school), [school, schoolModal]);

  const copyValue = useCallback(
    (value: string) => {
      navigator.clipboard
        .writeText(value)
        .then(() => toast.showMessage("Link kopiert"))
        .catch(() => toast.showMessage("Kopieren fehlgeschlagen!", "error"));
    },
    [toast.showMessage],
  );

  return (
    <div
      className={`w-full ${multiple ? "school" : "rounded-md border-2 border-[#F1F4FF] px-4 py-2 lg:px-8 lg:py-4"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-2xl">{school.Name}</h2>
        {(school.Roles.includes("Admin") || school.Roles.includes("Owner")) && (
          <div className="mt-[0.2rem] flex gap-3">
            <Popover>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <Award size={20} className="shrink-0 cursor-pointer" />
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>ClassInsights Zertifikat</p>
                </TooltipContent>
              </Tooltip>
              <PopoverContent className="flex w-80 flex-col gap-3">
                <h3>ClassInsights Zertifikat</h3>
                <Button label="HTML kopieren" onPress={copyCertificateCode} />
                <a
                  href={`https://classinsights.at/certificate.svg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-primary underline"
                >
                  Bild-Datei öffnen
                </a>
                <div>
                  <p>Link zum Zertifikat für diese Schule:</p>
                  <div
                    id="certificate-link"
                    className="rounded-md border border-input px-3 py-2"
                    onClick={() => copyValue(`https://classinsights.at?sid=${school.SchoolId}`)}
                    onKeyDown={() => copyValue(`https://classinsights.at?sid=${school.SchoolId}`)}
                    role="button"
                    tabIndex={0}
                  >
                    <p>{`https://classinsights.at?sid=${school.SchoolId}`}</p>
                  </div>
                </div>
                <div>
                  <p>Vorschau:</p>
                  <div className="certificate h-20 w-20"></div>
                </div>
              </PopoverContent>
            </Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <Settings
                  onClick={editSchool}
                  onKeyDown={editSchool}
                  size={20}
                  className="shrink-0 cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Schuleinstellungen bearbeiten</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </div>
      <p>
        {school.Roles.length === 1 ? "Rolle" : "Rollen"}:{" "}
        {school.Roles.map((role) => translateRole(role)).join(", ")}
      </p>
      <div
        className="mt-3 flex cursor-pointer items-center gap-1.5 text-primary"
        onClick={() => auth.navigateToDashboard(school.SchoolId)}
        onKeyDown={() => auth.navigateToDashboard(school.SchoolId)}
      >
        <p>Zum Dashboard</p>
        <ChevronRight className="shrink-0" />
      </div>
    </div>
  );
};

export default School;
