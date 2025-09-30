const projectData = {
    'p4-adder': {
        title: 'P4-Adder',
        date: 'Academic Year 2024/2025',
        description: 'A comprehensive implementation of the P4 (Prefix Parallel-Prefix) adder architecture with emphasis on the sparse tree carry generator for optimal performance.',
        details: `This project involved the design and implementation of a P4-Adder, a high-performance parallel-prefix adder architecture. The focus was on optimizing the carry generation network using a sparse tree structure to balance speed and hardware complexity.`,
        features: [
            'Implemented sparse tree carry generator for reduced gate delay',
            'Optimized critical path for maximum operating frequency',
            'Comprehensive simulation and verification in VHDL'
        ],
        technologies: ['VHDL', 'Digital Design', 'HDL Simulation']
    },
    'intercept-sse': {
        title: 'Intercept and SSE Calculator on Hardware',
        date: 'Academic Year 2024/2025',
        description: 'Hardware implementation of statistical computation engines using Finite State Machine architecture.',
        details: `Developed two FSM-based computational units for statistical analysis: one for calculating the intercept given a slope value, and another for computing the Sum of Squared Errors (SSE). Both machines were designed for efficient hardware implementation with minimal latency.`,
        features: [
            'FSM-based architecture for intercept calculation',
            'Dedicated FSM for Sum Squared Error computation',
            'Comprehensive testbench for validation'
        ],
        technologies: ['VHDL', 'FSM Design', 'Statistical Computing', 'Hardware Optimization']
    },
    'qemu-os': {
        title: 'QEMU Modding (OS)',
        date: 'Academic Year 2024/2025',
        description: 'Extended QEMU emulator to support NXP S32K3x8 board with peripheral emulation capabilities.',
        details: `This project involved modifying the QEMU emulator to support the NXP S32K3x8 development board, enabling full system emulation. The work included implementing peripheral emulation, particularly for UART communication, and integrating FreeRTOS support for real-time operating system testing.`,
        features: [
            'Implementation of NXP S32K3x8 board support in QEMU',
            'UART peripheral emulation for serial communication',
            'Integration with FreeRTOS for RTOS testing',
            'Custom device tree configuration',
            'Bash scripting for build automation'
        ],
        technologies: ['QEMU', 'C', 'UART', 'Bash', 'FreeRTOS', 'Embedded Systems']
    },
    'qemu-cyber': {
        title: 'QEMU Modding (Cybersecurity)',
        date: 'Academic Year 2024/2025',
        description: 'Implementation of TPM 2.0 peripheral emulation in QEMU using OpenSSL for cryptographic operations.',
        details: `Extended QEMU with Trusted Platform Module (TPM) 2.0 support, building the TPM implementation from scratch. Utilized OpenSSL library to emulate cryptographic operations including key generation, signing, and secure storage capabilities.`,
        features: [
            'Built TPM 2.0 implementation from ground up',
            'OpenSSL integration for cryptographic operations',
            'Support for key generation and secure storage',
            'Implementation of TPM command interface',
            'Testing framework for TPM functionality'
        ],
        technologies: ['QEMU', 'C', 'OpenSSL', 'Cybersecurity', 'TPM 2.0', 'Bash']
    },
    'optimizer': {
        title: 'Custom Optimizer for Gate-Level Netlist',
        date: 'Academic Year 2024/2025',
        description: 'TCL-based power optimization tool for gate-level netlists with constraint-aware voltage threshold adjustment.',
        details: `Developed a custom power optimization tool written in TCL that analyzes gate-level netlists and optimizes power consumption by intelligently adjusting voltage thresholds of individual cells. The optimizer respects timing and design constraints while maximizing power savings.`,
        features: [
            'Automated voltage threshold optimization algorithm',
            'Constraint-aware optimization (timing)',
            'Gate-level netlist parsing and analysis',
            'Detailed power consumption reporting'
        ],
        technologies: ['TCL', 'Power Optimization', 'VLSI Design', 'EDA Tools']
    },
    'dlx': {
        title: 'DLX Processor',
        date: 'Academic Year 2024/2025',
        description: 'Full implementation of a pipelined DLX processor architecture in VHDL.',
        details: `Complete implementation of the DLX (Deluxe) RISC processor with a 5-stage pipeline. The project included all major components: instruction fetch, decode, execute, memory access, and write-back stages, along with hazard detection and forwarding logic.`,
        features: [
            '5-stage pipeline implementation (IF, ID, EX, MEM, WB)',
            'Hazard detection',
            'Branch prediction logic at decode stage',
            'Complete instruction set support'
        ],
        technologies: ['VHDL', 'CPU Architecture', 'QuestaSIM', 'Bash', 'Digital Design']
    },
    'uvm': {
        title: 'UVM Testbench',
        date: 'Academic Year 2024/2025',
        description: 'Universal Verification Methodology testbench in SystemVerilog for comprehensive hardware verification.',
        details: `Developed a complete UVM-based verification environment in SystemVerilog to test the P4 adder and FSM control unit. The testbench includes constrained random testing, coverage collection, and automated regression testing capabilities.`,
        features: [
            'Complete UVM testbench architecture',
            'Constrained random test generation',
            'Constrained precise generation',
            'Functional coverage collection and analysis',
            'Assertion-based verification',
            'Integration with QuestaSIM'
        ],
        technologies: ['SystemVerilog', 'UVM', 'VHDL', 'QuestaSIM', 'Bash', 'Verification']
    }
};

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-date').textContent = project.date;
    
    let bodyHTML = `
        <div class="modal-section">
            <h3>Overview</h3>
            <p>${project.description}</p>
        </div>
        <div class="modal-section">
            <h3>Project Details</h3>
            <p>${project.details}</p>
        </div>
        <div class="modal-section">
            <h3>Key Features</h3>
            <ul>
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-section">
            <h3>Technologies Used</h3>
            <div class="tech-tags">
                ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('modal-body').innerHTML = bodyHTML;
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (!event || event.target.id === 'modal' || event.target.className === 'modal-close') {
        document.getElementById('modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});