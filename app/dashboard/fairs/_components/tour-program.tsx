"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProgramDetail, TourProgram } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FairForm() {
  const router = useRouter();

  const [tourPrograms, setTourPrograms] = useState<TourProgram[]>([
    {
      title1: "",
      title2: "",
      title3: "",
      description: "",
      singlePersonPrice: 0,
      twoPersonPrice: 0,
      programs: [{ date: "", activity: "" }],
    },
  ]);

  const addTourProgram = () => {
    setTourPrograms([
      ...tourPrograms,
      {
        title1: "",
        title2: "",
        title3: "",
        description: "",
        singlePersonPrice: 0,
        twoPersonPrice: 0,
        programs: [{ date: "", activity: "" }],
      },
    ]);
  };

  const removeTourProgram = (index: number) => {
    if (tourPrograms.length <= 1) return;
    const updated = [...tourPrograms];
    updated.splice(index, 1);
    setTourPrograms(updated);
  };

  const addProgram = (tourIndex: number) => {
    const updated = [...tourPrograms];
    updated[tourIndex].programs.push({ date: "", activity: "" });
    setTourPrograms(updated);
  };

  const removeProgram = (tourIndex: number, programIndex: number) => {
    const updated = [...tourPrograms];
    if (updated[tourIndex].programs.length <= 1) return;
    updated[tourIndex].programs.splice(programIndex, 1);
    setTourPrograms(updated);
  };

  const handleTourProgramChange = (
    index: number,
    field: keyof TourProgram,
    value: string | number
  ) => {
    const updated = [...tourPrograms];
    updated[index] = { ...updated[index], [field]: value };
    setTourPrograms(updated);
  };

  const handleProgramChange = (
    tourIndex: number,
    programIndex: number,
    field: keyof ProgramDetail,
    value: string
  ) => {
    const updated = [...tourPrograms];
    updated[tourIndex].programs[programIndex] = {
      ...updated[tourIndex].programs[programIndex],
      [field]: value,
    };
    setTourPrograms(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tur Programları</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <input
            type="hidden"
            name="tourPrograms"
            value={JSON.stringify(tourPrograms)}
          />

          {tourPrograms.map((tour, tourIndex) => (
            <div
              key={tourIndex}
              className="space-y-4 border border-l-sidebar-ring p-4 rounded-lg"
            >
              <h2>Tur Programı {tourIndex + 1}</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor={`title1-${tourIndex}`}>Başlık 1</Label>
                  <Input
                    id={`title1-${tourIndex}`}
                    value={tour.title1}
                    onChange={(e) =>
                      handleTourProgramChange(
                        tourIndex,
                        "title1",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`title2-${tourIndex}`}>Başlık 2</Label>
                  <Input
                    id={`title2-${tourIndex}`}
                    value={tour.title2}
                    onChange={(e) =>
                      handleTourProgramChange(
                        tourIndex,
                        "title2",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`title3-${tourIndex}`}>Başlık 3</Label>
                  <Input
                    id={`title3-${tourIndex}`}
                    value={tour.title3}
                    onChange={(e) =>
                      handleTourProgramChange(
                        tourIndex,
                        "title3",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`description-${tourIndex}`}>Açıklama</Label>
                <Textarea
                  id={`description-${tourIndex}`}
                  value={tour.description}
                  onChange={(e) =>
                    handleTourProgramChange(
                      tourIndex,
                      "description",
                      e.target.value
                    )
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor={`singlePersonPrice-${tourIndex}`}>
                    Tek Kişilik Fiyat
                  </Label>
                  <Input
                    id={`singlePersonPrice-${tourIndex}`}
                    type="number"
                    value={tour.singlePersonPrice}
                    onChange={(e) =>
                      handleTourProgramChange(
                        tourIndex,
                        "singlePersonPrice",
                        Number(e.target.value)
                      )
                    }
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor={`twoPersonPrice-${tourIndex}`}>
                    Çift Kişilik Fiyat
                  </Label>
                  <Input
                    id={`twoPersonPrice-${tourIndex}`}
                    type="number"
                    value={tour.twoPersonPrice}
                    onChange={(e) =>
                      handleTourProgramChange(
                        tourIndex,
                        "twoPersonPrice",
                        Number(e.target.value)
                      )
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-md font-medium">Etkinkilker</h4>
                {tour.programs.map((program, programIndex) => (
                  <div key={programIndex} className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`date-${tourIndex}-${programIndex}`}>
                        Date
                      </Label>
                      <Input
                        id={`date-${tourIndex}-${programIndex}`}
                        type="date"
                        value={program.date}
                        onChange={(e) =>
                          handleProgramChange(
                            tourIndex,
                            programIndex,
                            "date",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`activity-${tourIndex}-${programIndex}`}>
                        Activity
                      </Label>
                      <Input
                        id={`activity-${tourIndex}-${programIndex}`}
                        value={program.activity}
                        onChange={(e) =>
                          handleProgramChange(
                            tourIndex,
                            programIndex,
                            "activity",
                            e.target.value
                          )
                        }
                        required
                      />
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        onClick={() => removeProgram(tourIndex, programIndex)}
                        disabled={tour.programs.length <= 1}
                      >
                        Programı Kaldır
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addProgram(tourIndex)}
                >
                  Program Ekle
                </Button>
              </div>

              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeTourProgram(tourIndex)}
                  disabled={tourPrograms.length <= 1}
                >
                  Tur Programını Kaldır
                </Button>
              </div>
            </div>
          ))}

          <Button type="button" variant="outline" onClick={addTourProgram}>
            Tur Programı Ekle
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
