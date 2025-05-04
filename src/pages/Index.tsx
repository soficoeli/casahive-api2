
import React, { useEffect } from 'react';
import HexagonDivider from '@/components/HexagonDivider';
import HexagonPattern from '@/components/HexagonPattern';
import ImageCarousel from '@/components/ImageCarousel';
import HexagonImage from '@/components/HexagonImage';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  // Project board images with the uploaded architectural drawings
  const projectBoardImages = [
    '/lovable-uploads/ecf8b5b5-75a0-48be-88ff-a85eb7e2d704.png', // Memorial Justificativo
    '/lovable-uploads/5b2dca05-eaec-4b3a-93fe-4fe6d5e3a4a2.png', // Plantas 1
    '/lovable-uploads/84b0caa0-93ea-4fd4-bd54-128bf037a6d5.png', // Plantas 2
    '/lovable-uploads/e87cf388-e24f-4358-9d24-0bc31079329f.png'  // Elevações e Cortes
  ];
  
  const projectBoardTitles = [
    "Memorial Justificativo",
    "Plantas - Situação e Cobertura",
    "Plantas - Habitação Familiar",
    "Elevações e Cortes"
  ];
  
  const modelImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];
  
  const modelTitles = [
    "Vista Frontal da Maquete",
    "Vista Lateral com Pergolados",
    "Detalhe das Conexões Hexagonais"
  ];

  return (
    <div className="min-h-screen bg-hive-white text-hive-gray relative">
      <HexagonPattern />
      
      {/* Header Section */}
      <header className="relative pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            Casa Hive — <span className="text-hive-terracotta">Ateliê de Projeto II</span>
          </h1>
          
          <div className="absolute -top-10 right-0 w-48 h-48 bg-hive-gold/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -left-20 w-40 h-40 bg-hive-gold/10 rounded-full blur-3xl"></div>
        </div>
      </header>

      <main className="px-6 md:px-12 lg:px-24 py-12 max-w-5xl mx-auto">
        {/* Main Presentation */}
        <AnimatedSection className="mb-20">
          <p className="text-lg leading-relaxed mb-6">
            Desenvolvido por <span className="font-semibold">Maria Clara Pereira Moura</span> e <span className="font-semibold">Sofia Coeli Matos Azevedo</span> para a disciplina de Ateliê de Projeto II, o projeto Casa Hive propõe uma residência compartilhada para dois perfis familiares distintos, situada no bairro Fundinho, em Uberlândia/MG.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            O terreno comporta duas unidades habitacionais de até 100m² cada, conectadas por uma área comum. A proposta reúne uma república mista de estudantes universitários e um casal de idosos artistas e sem filhos, criando um ambiente de convivência intergeracional com trocas simbióticas e enriquecedoras.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A partir do conceito de colmeia — que inspira tanto o nome quanto as soluções formais — o projeto adota geometrias hexagonais como estratégia espacial. Essa abordagem permitiu explorar uma linguagem arquitetônica não convencional, desafiando a organização dos ambientes e a integração de áreas compartilhadas, como a cozinha.
          </p>
          <p className="text-lg leading-relaxed">
            A volumetria da edificação é marcada por paredes brancas, platibanda preta e pergolados em madeira vernizada no tom cerâmico, com cobertura de telha de cerâmica. No entanto, a identidade visual proposta busca abstrair esses elementos, destacando-se pela organização orgânica, simétrica e fluida — em analogia direta ao comportamento das colmeias.
          </p>
        </AnimatedSection>
        
        <HexagonDivider />
        
        {/* Project Boards Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 relative inline-block">
            Pranchas do Projeto
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-hive-gold"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectBoardImages.map((src, index) => (
              <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}>
                <HexagonImage 
                  src={src} 
                  alt={projectBoardTitles[index]} 
                  isRectangular={true}
                  className="w-full"
                />
                <p className="mt-2 text-center font-medium text-sm text-hive-gray/80">{projectBoardTitles[index]}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        <HexagonDivider />
        
        {/* Physical Models Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 relative inline-block">
            Maquete Física
            <div className="absolute -bottom-2 left-0 h-1 w-24 bg-hive-gold"></div>
          </h2>
          
          <ImageCarousel images={modelImages} titles={modelTitles} />
        </AnimatedSection>
      </main>
      
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-100">
        <p>Casa Hive — Projeto Acadêmico de Arquitetura © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
