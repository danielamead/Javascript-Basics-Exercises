const calculateBMI = (heightCentimeters, weightKilos) => {
  const heightMeters = heightCentimeters / 100;
  const BMI = (weightKilos / heightMeters ** 2).toFixed(2);
  return BMI;
}
