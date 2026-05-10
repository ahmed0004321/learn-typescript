interface Developer <T> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T
}

interface BrandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface appleWatch {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    aiFeature: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
    name: 'Mr. Poor',
    salary: 23000,
    device: {
        brand: 'windows',
        model: 'lenovo',
        releasedYear: '2024'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true
    }
};



const richDeveloper: Developer<appleWatch> = {
    name: 'Mr. Poor',
    salary: 1000000,
    device: {
        brand: 'apple',
        model: 'mac mini m4',
        releasedYear: '2024'
    },
    smartWatch: {
        heartRate: '200',
        callSupport: true,
        calculator: true,
        aiFeature: true

    }
}