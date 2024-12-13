import { Folder, FolderOpen } from "lucide-react";
import React from "react";

const FolderHoverable = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      {isHovered ? (
        <FolderOpen size={64} strokeWidth={1} />
      ) : (
        <Folder size={64} strokeWidth={1} />
      )}
    </div>
  );
};

export default FolderHoverable;
