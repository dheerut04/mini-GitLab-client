import React from "react";
import { Diff, Hunk, parseDiff } from 'react-diff-view';
import 'react-diff-view/style/index.css';

interface DiffViewProps {
    diffText: string;
}

interface DiffViewActionProps {
    setDiff: (diff: any) => void;
    resetDiff: () => void;
}

export const DiffViewWidget: React.FC<DiffViewProps & DiffViewActionProps> = (props) => { 

    const diffText = `--- a
+++ b
@@ -1,10 +1,11 @@
 [
     {
         "age": "22",
         "name": "Niroj"
+        "idk": "blah
     },
     {
         "age": "20",
-        "name": "Dey"
+        "name": "Dey1"
     }
 ]`;

 
//     const diffText = `--- Button.tsx    2025-09-15 19:20:00.000000000 +0530
// +++ Button.tsx    2025-09-15 19:25:00.000000000 +0530
// @@ 1,3 1,4 @@
//  label: string;
//  onClick: () => void;
// + disabled?: boolean;
// };
// @@ 4,3 5,4 @@
//  return (
// -    <button onClick={onClick}>
// -        {label}
// +    <button onClick={onClick} disabled={disabled}>
// +        {label.toUpperCase()}
//     </button>
//  );
// };
// `;



    const files = parseDiff(diffText) || [];

    return (
        <div style={{ fontFamily: 'sans-serif', margin: '20px' }}>
            {files.map(({ oldPath, newPath, hunks }) => (
                <Diff
                    key={oldPath + newPath}
                    // viewType="unified"
                    viewType="split"
                    diffType="modify"
                    hunks={hunks || []}
                    oldRevision={oldPath}
                    newRevision={newPath}
                >
                    {(hunks) => hunks.map(hunk => (
                        <Hunk key={hunk.content + hunk.oldStart} hunk={hunk} />
                    ))}
                </Diff>
            ))}
        </div>
    );
}
